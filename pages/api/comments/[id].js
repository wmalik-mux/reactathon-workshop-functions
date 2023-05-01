const comments = [
  "This video had me laughing so hard I almost fell off my chair!",
  "Wow, this is the most creative video I've seen in a long time.",
  "I had no idea what to expect, but this video exceeded all my expectations.",
  "I can't stop watching this video on repeat, it's that good.",
  "This video is a masterpiece, plain and simple.",
  "I don't know how you did it, but this video is pure magic.",
  "This video is so good, it's like winning the lottery and finding a pot of gold at the end of a rainbow.",
  "I'm blown away by the quality of this video, keep up the amazing work!",
  "I'm pretty sure this video is going to go viral, it's just that good.",
  "I never knew I needed this video in my life until now.",
  "I can't believe how much effort and skill went into making this video.",
  "This video is the reason why I'm subscribed to this channel.",
  "This video is a work of art, and I'm honored to have watched it.",
  "This video is the kind of content that makes me want to sell all my possessions and live in a van down by the river.",
  "I'm speechless, this video is simply incredible.",
  "I feel like I just discovered a hidden gem with this video.",
  "I can't wait to see what this creator comes up with next, this video was amazing.",
  "This video is going to be a tough act to follow, that's for sure.",
  "This video made my day, my week, my month, my year.",
  "I can't believe how much I learned from this video, and it was fun to watch too!",
  "This video is the reason why I'm procrastinating right now.",
  "I'm impressed by how much creativity went into making this video.",
  "This video reminded me of that one time I got lost in the woods and met a talking squirrel.",
  "I never thought I'd be saying this, but this video is better than my favorite TV show.",
  "This video is proof that anything is possible with a little bit of imagination.",
  "I'm so glad I clicked on this video, it was worth every second.",
  "This video is so good, it's almost too good to be true.",
  "I'm going to be watching this video on repeat for days, it's just that good.",
  "This video is the kind of content that makes me forget about all my problems and just enjoy life.",
];

function stringReduce(str) {
  return str.split("").reduce((sum, char) => {
    return sum + char.charCodeAt(0);
  }, 0);
}

export default function handler(req, res) {
  const { id } = req.query;
  // Split the hash into 3 parts of equal length
  const len = id.length / 3;
  const part1 = id.substring(0, len);
  const part2 = id.substring(len, 2 * len);
  const part3 = id.substring(2 * len, 3 * len);

  const index1 = stringReduce(part1) % comments.length;
  const index2 = stringReduce(part2) % comments.length;
  const index3 = stringReduce(part3) % comments.length;

  res
    .status(200)
    .json({ comments: [comments[index1], comments[index2], comments[index3]] });
}
