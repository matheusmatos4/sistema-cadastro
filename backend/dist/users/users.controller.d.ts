import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(body: any): Promise<Partial<import("./user.entity").User> & import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
}
