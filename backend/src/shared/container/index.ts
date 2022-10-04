import { container } from "tsyringe";

import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";
import { SchoolsRepository } from "@modules/schools/repositories/prisma/SchoolsRepository";

container.registerSingleton<ISchoolsRepository>(
    "SchoolsRepository",
    SchoolsRepository
);
