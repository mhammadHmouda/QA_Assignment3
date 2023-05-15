
const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Observe goals', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('select[name="login_as"]').select('staff');
    cy.get('form').submit();
    cy.get('a[href="/staff/32"]').click();
    cy.get('#userInfoMenu').should('exist');
    cy.get('a[href="/staff/32/goals/"]').click();
    cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
    cy.get('input[name="all_groups"]').check({ force: true });
    cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
    cy.get('button:contains("Apply filters")').click();
  });

  it('Give grade to the all student', () => {
    cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
    cy.get('button:contains("Apply filters")').click();
    cy.get('select[name="grade"]')
      .select('5');
    cy.get('img[src="/static/images/noDataAva.png"]')
      .should('exist');
  });

  it('Unobserve all goals Observed', () => {
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
    cy.get('button:contains("Apply filters")').click();
    cy.wait(1000);
    cy.contains('button', 'Unobserve').click({ multiple: true });
    cy.get('#observer_table_div').contains('button', 'Undo').should('not.be.exist');
  });

  it('Observe specific goal without grade', () => {
    cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
    cy.get('button:contains("Apply filters")').click();
    cy.get('div.level_Medium button:first').click();
  });

  it('Undo goal observed', () => {
    cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
    cy.get('button:contains("Apply filters")').click();
    cy.xpath('//*[@id="1199_782"]/div/div[3]/div/div[2]/button')
      .click();
    cy.xpath('//*[@id="1199_782"]/div/div/div[3]/div/div[2]/div/button')
      .click();
  });
});