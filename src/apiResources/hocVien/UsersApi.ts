import { DataService } from '@/config/dataService/dataService';
export interface Pagination {
  page?: number;
  itemsPerPage?: number;
  records?: number;
  totalItems?: number;
  totalPages?: number;
  sortBy?: string;
  descending?: boolean;
  includeEntities?: boolean;
}

export interface GetUsersParams extends Pagination {
  keywords?: string;
  roles?: string[];
}

class UsersApi {
  getMyRoles() {
    return DataService.get('Users/myaccount/roles');
  }
  getTroGiang() {
    return DataService.get('/Users/laydanhsachtrogiang');
  }
}
export default new UsersApi();
