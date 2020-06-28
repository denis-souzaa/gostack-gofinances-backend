import { getRepository, getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';
import AppError from '../errors/AppError';

interface Request {
  title: string;
  value: number;
  category: string;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    category,
    type,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const { total } = await transactionRepository.getBalance();

    if (type === 'outcome' && value > total) {
      throw new AppError('The Saldo not is sufficient to this transaction');
    }

    const categoryTransaction = await this.categoryExists(category);

    const transaction = transactionRepository.create({
      title,
      value,
      category: categoryTransaction,
      type,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }

  private async categoryExists(categoryName: string): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const categoryExists = await categoryRepository.findOne({
      where: { title: categoryName },
    });

    if (categoryExists) {
      return categoryExists;
    }

    const category = categoryRepository.create({ title: categoryName });
    await categoryRepository.save(category);
    return category;
  }
}

export default CreateTransactionService;
