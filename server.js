const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: 'AKIA6M4ZKZMB42LGZ46G',
        secretAccessKey: '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'
    }
})

const getObject = async (key) => {
    const command = new GetObjectCommand ({
        Bucket: 'discord-clone-aws',
        Key: key
    })

    const url = await getSignedUrl (client, command, {expiresIn : 20})
    return url
}

const init = async () => {
    console.log (' Get Url for discord-image.png', await getObject ('discord-image.png'))
}

init ()