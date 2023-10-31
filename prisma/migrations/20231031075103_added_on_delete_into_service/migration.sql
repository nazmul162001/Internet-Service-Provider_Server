-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_serviceId_fkey";

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
