/*
  Warnings:

  - You are about to drop the column `datum` on the `UserBook` table. All the data in the column will be lost.
  - Added the required column `date` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "datum",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
