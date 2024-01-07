import { CreateAaDto, UpdateAaDto } from "../../interface/users/user.interface";

const create = async (createAaDto: CreateAaDto) => {
    return 'This action adds a new user';
}

const findAll = async () =>  {
    return `This action returns all user`;
}

const findOne = (id: number) => {
    return `This action returns a #${id} user`;
}

const update = (id: number, updateAaDto: UpdateAaDto) => {
    return `This action updates a #${id} user`;
}

const remove = (id: number) => {
    return `This action removes a #${id} user`;
}

export { create, findAll, findOne, update, remove }
