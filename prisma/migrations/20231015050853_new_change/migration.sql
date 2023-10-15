/*
  Warnings:

  - You are about to drop the column `channel` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the column `hdChannel` on the `Service` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Service" DROP COLUMN "channel",
DROP COLUMN "hdChannel";
