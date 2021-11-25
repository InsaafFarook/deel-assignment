/// <reference types="cypress" />

import { LoginData} from '../../fixtures/loginData.json';
import * as Login from '../../lib/functions/LoginFunctions';
import * as Home from '../../lib/functions/HomeFunctions';
import * as MenuNavigation from '../../lib/functions/LeftMenuNavigations';
import * as CreateContract from '../../lib/functions/CreateContractsFunctions';

describe('Verify user can create contract successfully', () => {

  const executionEnv = 'training';

  beforeEach(() => {
    Login.navigateToLogin(`login_url_${executionEnv}`);
    Login.login(LoginData.email, LoginData.password);
    Home.getHeaderText().should('contain', LoginData.name);
  });

  it('Should create Fixed Rate Contract Successfully', () => {
    MenuNavigation.navigateToCreateContract();
    CreateContract.isHeaderDisplayed();
    CreateContract.clickFixedRate();
  });


});