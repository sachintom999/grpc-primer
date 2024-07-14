import * as grpc from "@grpc/grpc-js";

const server = new grpc.Server();

//@ts-ignore
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("listening on 50051");
  }
);
