-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('COMMUNITY_MEMBER', 'AGENT');

-- CreateTable
CREATE TABLE "Userauth" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "userType" "UserType" NOT NULL,

    CONSTRAINT "Userauth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityBusinessinfo" (
    "id" SERIAL NOT NULL,
    "CommunityName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "communityType" TEXT[],
    "userauthId" INTEGER NOT NULL,

    CONSTRAINT "CommunityBusinessinfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT,
    "startedInIndustry" TIMESTAMP(3),
    "aboutYou" TEXT,
    "education" TEXT,
    "fullName" TEXT,
    "profilePhoto" TEXT,
    "certificatesAndAwards" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "UserauthId" INTEGER NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityBusinessDetails" (
    "id" SERIAL NOT NULL,
    "dba" TEXT NOT NULL,
    "yearFounded" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "units" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "primaryPhone" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "cellPhone" TEXT NOT NULL,
    "fax" TEXT NOT NULL,
    "Corporation" TEXT[],
    "Status" TEXT[],
    "companyOverview" TEXT,
    "businessInfoId" INTEGER NOT NULL,

    CONSTRAINT "CommunityBusinessDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyImages" (
    "id" SERIAL NOT NULL,
    "image" TEXT[],
    "businessInfoId" INTEGER NOT NULL,

    CONSTRAINT "PropertyImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunitySpecialties" (
    "id" SERIAL NOT NULL,
    "specialties" TEXT[],
    "businessInfoId" INTEGER NOT NULL,

    CONSTRAINT "CommunitySpecialties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityAmenities" (
    "id" SERIAL NOT NULL,
    "amenities" TEXT[],
    "businessInfoId" INTEGER NOT NULL,

    CONSTRAINT "CommunityAmenities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityPricing" (
    "id" SERIAL NOT NULL,
    "pricing" TEXT[],
    "payments" TEXT[],
    "businessInfoId" INTEGER NOT NULL,

    CONSTRAINT "CommunityPricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentBusinessinfo" (
    "id" SERIAL NOT NULL,
    "agentName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "businessType" TEXT NOT NULL,
    "services" TEXT[],
    "userauthId" INTEGER NOT NULL,

    CONSTRAINT "AgentBusinessinfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentBusinessDetails" (
    "id" SERIAL NOT NULL,
    "dba" TEXT NOT NULL,
    "yearFounded" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "primaryPhone" TEXT NOT NULL,
    "ext" TEXT NOT NULL,
    "cellPhone" TEXT NOT NULL,
    "fax" TEXT NOT NULL,
    "Corporation" TEXT[],
    "Status" TEXT[],
    "companyOverview" TEXT,
    "agentbusinessInfoId" INTEGER NOT NULL,

    CONSTRAINT "AgentBusinessDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentImage" (
    "id" SERIAL NOT NULL,
    "image" TEXT[],
    "agentbusinessInfoId" INTEGER NOT NULL,

    CONSTRAINT "AgentImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AgentConnectionRequest" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AgentConnectionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityConnectionRequest" (
    "id" SERIAL NOT NULL,
    "senderId" INTEGER NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommunityConnectionRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "eventName" TEXT NOT NULL,
    "eventDate" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "repeatEvent" TEXT NOT NULL,
    "eventDetails" TEXT,
    "eventUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incentive" (
    "id" SERIAL NOT NULL,
    "incentiveName" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "valueOfIncentive" DOUBLE PRECISION NOT NULL,
    "inPercent" BOOLEAN NOT NULL,
    "description" TEXT,
    "legalDisclaimer" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incentive_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userauth_email_key" ON "Userauth"("email");

-- AddForeignKey
ALTER TABLE "CommunityBusinessinfo" ADD CONSTRAINT "CommunityBusinessinfo_userauthId_fkey" FOREIGN KEY ("userauthId") REFERENCES "Userauth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_UserauthId_fkey" FOREIGN KEY ("UserauthId") REFERENCES "Userauth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityBusinessDetails" ADD CONSTRAINT "CommunityBusinessDetails_businessInfoId_fkey" FOREIGN KEY ("businessInfoId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyImages" ADD CONSTRAINT "PropertyImages_businessInfoId_fkey" FOREIGN KEY ("businessInfoId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunitySpecialties" ADD CONSTRAINT "CommunitySpecialties_businessInfoId_fkey" FOREIGN KEY ("businessInfoId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityAmenities" ADD CONSTRAINT "CommunityAmenities_businessInfoId_fkey" FOREIGN KEY ("businessInfoId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityPricing" ADD CONSTRAINT "CommunityPricing_businessInfoId_fkey" FOREIGN KEY ("businessInfoId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentBusinessinfo" ADD CONSTRAINT "AgentBusinessinfo_userauthId_fkey" FOREIGN KEY ("userauthId") REFERENCES "Userauth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentBusinessDetails" ADD CONSTRAINT "AgentBusinessDetails_agentbusinessInfoId_fkey" FOREIGN KEY ("agentbusinessInfoId") REFERENCES "AgentBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentImage" ADD CONSTRAINT "AgentImage_agentbusinessInfoId_fkey" FOREIGN KEY ("agentbusinessInfoId") REFERENCES "AgentBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentConnectionRequest" ADD CONSTRAINT "AgentConnectionRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Userauth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AgentConnectionRequest" ADD CONSTRAINT "AgentConnectionRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Userauth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityConnectionRequest" ADD CONSTRAINT "CommunityConnectionRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityConnectionRequest" ADD CONSTRAINT "CommunityConnectionRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "CommunityBusinessinfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
