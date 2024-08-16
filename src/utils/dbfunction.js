import prisma from "../utils/prisma";

export async function getCommunityBusinessinfoById(id) {
  try {
    const data = await prisma.communityBusinessinfo.findUnique({
      where: {
        id: id,
      },
      include: {
        businessDetails: true,
        amenities: true,
        specialties: true,
        pricing: true,
        propertyImages: true,
      },
    });
    console.log(data);

    if (!data) {
      throw new Error("CommunityBusinessinfo not found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching CommunityBusinessinfo:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
