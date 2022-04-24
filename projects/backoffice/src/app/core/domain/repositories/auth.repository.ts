import { Observable } from 'rxjs';
import { Tokens } from '../../application/tokens.interface';
import { AuthEntity } from '../entities/auth.entity';

export interface AuthRepository {
  login(auth: AuthEntity): Observable<Tokens>;
}
