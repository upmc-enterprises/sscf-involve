# Client

## Setup

```
$ npm install -g grunt-cli bower
$ npm install && bower install
```

### AWS Credentials

Create a file at the root of the client named `.aws.json` with the contents:

```
{
  "bucket": "myBucketName",
  "accessKeyId": "Replace with your AWS Access Key Id",
  "secretAccessKey": "Replace with your AWS Secret Access Key"
}
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Deploy

```
$ grunt deploy
```
