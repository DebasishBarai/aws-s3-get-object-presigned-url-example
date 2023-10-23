const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIA6M4ZKZMBRWZDKQG3',
        secretAccessKey: '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'
    }
})

const getObject = async (key) => {
    const command = new GetObjectCommand ({
        Bucket: 'discord-bucket-aws-clone',
        Key: key
    })

    const url = await getSignedUrl (client, command, {expiresIn : 20})
    return url
}

const init = async () => {
    console.log (' Get Url for discord-image.jpg', await getObject ('discord-image.jpg'))
}

init ()