import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(user: Partial<User>): Promise<Partial<User> & User>;
    findAll(): Promise<User[]>;
}
