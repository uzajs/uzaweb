import { Request, Response } from "express";
import "reflect-metadata";
import { Category } from "../../../inventory/src/core/model/category";
import { ICategoryRepository } from "../../../inventory/src/core/interfaces/icategory-repository";
import { CategoryRepository } from "../../../inventory/src/infrastructure/category-repository";
import { connection } from "../app";

export let index = async (req: Request, res: Response) => {
    const repo: ICategoryRepository = new CategoryRepository(Category, connection);
    const cats = await repo.getAll();

    res.send(`<h1>Welcome to Uza.js</h1> found [${cats.length}] categories:<br> ${cats}`);
};