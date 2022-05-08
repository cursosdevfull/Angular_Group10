import { Inject, Injectable } from '@angular/core';
import { AuthEntity } from '../domain/entities/auth.entity';
import { AuthRepository } from '../domain/repositories/auth.repository';
import { AuthInfrastructure } from '../infrastructure/auth.infrastructure';
import { Router } from '@angular/router';
import { Tokens } from './tokens.interface';
import { StorageInfrastructure } from '../infrastructure/storage.infrastructure';
import { StorageRepository } from '../domain/repositories/storage.repository';
import { ILayout } from '../../config/interfaces/layout.interface';
import { LayoutService } from '../../config/services/layout.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApplication {
  private userLogged = false;

  constructor(
    @Inject(AuthInfrastructure) private authRepository: AuthRepository,
    @Inject(StorageInfrastructure) private storageRepository: StorageRepository,
    private layoutService: LayoutService,
    private router: Router
  ) {}

  login(auth: AuthEntity) {
    this.authRepository.login(auth).subscribe((response: Tokens) => {
      this.storageRepository.setStorage('accessToken', response.accessToken);
      this.storageRepository.setStorage('refreshToken', response.refreshToken);
      this.userLogged = true;
      this.router.navigate(['/dashboard']);
      const configLayout: ILayout = { header: true, menu: true };
      //layoutService.settingConfiguration(configLayout);
      this.layoutService.configuration = configLayout;
    });
  }

  logout() {
    this.storageRepository.clear();
    this.userLogged = false;
    this.router.navigate(['/']);
  }

  get isAuthenticated(): boolean {
    return (
      this.userLogged || !!this.storageRepository.getStorage('accessToken')
    );
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.authRepository.getNewAccessToken(refreshToken);
  }
}
