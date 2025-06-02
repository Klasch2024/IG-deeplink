export default function handler(req, res) {
  res.writeHead(302, {
    Location: "https://theallmylinks.com/smashorsmash" // 👈 change this to your final target
  });
  res.end();
} 