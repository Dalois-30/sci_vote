
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { ApiResponseDTO } from 'src/shared/response/api-response';
@Injectable()
export class VoteService { 
constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
) { }


  /**
   * 
   * @returns the lis of all users
   */
  async findAll(headers: any): Promise < ApiResponseDTO < User[] >> {
    const res = new ApiResponseDTO<User[]>();
    try {
        // await this.sharedService.checkIfAdmin(headers);
        const result = await this.userRepository.find();
        res.data = result;
        res.message = "Successfully get users information";
        res.statusCode = HttpStatus.OK;
    } catch(error) {
        res.statusCode = HttpStatus.BAD_REQUEST;
        res.message = error.message
    }
    return res;
}
  /**
   * 
   * @param id 
   * @returns returns the specified user by its email
   */
  async findOneById(id: number): Promise < ApiResponseDTO < User >> {
    const res = new ApiResponseDTO<User>();
    try {
        const result = await this.userRepository.findOne({
            where: {
                id: id
            },
            relations: {
                votes: true
            }
        });
        res.data = result;
        res.message = "Successful retrieve user"
      res.statusCode = HttpStatus.OK;
    } catch(error) {
        res.statusCode = HttpStatus.BAD_REQUEST;
        res.message = error.message
    }
    return res;



  }

}