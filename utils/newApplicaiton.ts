import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";

// container name
const containerName = process.env
  .NEXT_PUBLIC_AZURE_STORAGE_CONTAINER_NAME as string;

// connection string
const connectionString = process.env
  .NEXT_PUBLIC_AZURE_STORAGE_CONNECTION_STRING as string;

const blobServiceClient = new BlobServiceClient(connectionString);

export const uploadFile = async (file: File) => {
  const fileName = `${file.name}-${uuidv4().slice(0, 8)}`;
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
  try {
    await blockBlobClient.uploadData(file);
    const fileUrl = `https://${containerName}.blob.core.windows.net/${containerName}/${fileName}`;
    return { success: true, fileUrl };
  } catch (error: any) {
    return { error: true, errorMessage: error?.message };
  }
};
