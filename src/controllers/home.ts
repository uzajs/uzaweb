import { Request, Response } from "express";
import { ICategoryRepository } from "../../../inventory/src/interfaces/repositories/icategory-repository";
import { CategoryRepository } from "../../../inventory/src/infrastructure/repository/category-repository";
import { Category } from "../../../inventory/src/model/category";

export let index = (req: Request, res: Response) => {
    const rep: ICategoryRepository = new CategoryRepository();
    rep.create(new Category("Demo"))
    rep.create(new Category("Test"))
    const cats = rep.getAll();
    res.send(`<h1>Welcome to Uza.js</h1> <br> found [${cats.length}] categories:<br> ${cats}`);
};