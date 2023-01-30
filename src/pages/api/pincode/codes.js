// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method === "GET") {
        // console.log(req);
        const pins = ["411032", "411031", "411030"]
        res.status(200).json({pins});
    } else {
        res.status(403).json("Method not Allowed");
    }
} 