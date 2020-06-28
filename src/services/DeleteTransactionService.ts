// import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRespository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionRespository.findOne(id);

    if (!transaction) {
      throw new AppError('transaction does not exist');
    }

    await transactionRespository.remove(transaction);
  }
}

export default DeleteTransactionService;
