const emailChunks = ['katha', 'nandy', '41', '@', 'gmail', '.com']
const phoneChunks = ['+91', '7866', '081', '230']

const decodeChunks = (chunks, separator = '') => chunks.join(separator)

export const contact = {
  email: decodeChunks(emailChunks),
  phone: decodeChunks(phoneChunks),
}