/*
  Warnings:

  - Added the required column `pos` to the `UserTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTask" ADD COLUMN     "pos" INTEGER NOT NULL;
