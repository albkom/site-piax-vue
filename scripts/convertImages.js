import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const SRC_DIR = './.external/img'
const DEST_DIR = './public/img'
const WEBP_QUALITY = 80

function getAllPngFiles(dirPath, base = dirPath, result = []) {
  if (!fs.existsSync(dirPath)) return result
  for (const entry of fs.readdirSync(dirPath)) {
    const full = path.join(dirPath, entry)
    if (fs.statSync(full).isDirectory()) {
      getAllPngFiles(full, base, result)
    } else if (entry.toLowerCase().endsWith('.png')) {
      result.push(path.relative(base, full).replace(/\\/g, '/'))
    }
  }
  return result
}

async function convertImages() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Source folder not found: ${SRC_DIR}`)
    process.exit(1)
  }

  const files = getAllPngFiles(SRC_DIR)
  if (files.length === 0) {
    console.log('No PNG files found.')
    return
  }

  let converted = 0
  let skipped = 0
  let errors = 0

  for (const rel of files) {
    const srcPath = path.join(SRC_DIR, rel)
    const destRel = rel.replace(/\.png$/i, '.webp')
    const destPath = path.join(DEST_DIR, destRel)

    fs.mkdirSync(path.dirname(destPath), { recursive: true })

    try {
      const srcSize = fs.statSync(srcPath).size
      await sharp(srcPath).webp({ quality: WEBP_QUALITY }).toFile(destPath)
      const destSize = fs.statSync(destPath).size
      const ratio = ((1 - destSize / srcSize) * 100).toFixed(1)
      console.log(`[OK] ${rel} → ${destRel}  ${kb(srcSize)} → ${kb(destSize)} (-${ratio}%)`)
      converted++
    } catch (err) {
      console.error(`[ERR] ${rel}: ${err.message}`)
      errors++
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped, ${errors} errors.`)
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

convertImages()
