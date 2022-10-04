import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import { prisma } from "../src/shared/infra/database/prismaClient";

async function main() {
    await prisma.user.create({
        data: {
            id: uuidV4(),
            name: "João",
            email: "jvitormoreirad@hotmail.com",
            password: await hash("123456789", 8),
            created_at: new Date(),
            updated_at: new Date(),
        },
    });
}
main().finally(() => prisma.$disconnect);
