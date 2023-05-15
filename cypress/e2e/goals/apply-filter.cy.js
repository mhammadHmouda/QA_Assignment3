const username = Cypress.env('username');
const password = Cypress.env('password');

describe('Filter goals', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('select[name="login_as"]').select('staff');
        cy.get('form').submit();
        cy.get('a[href="/staff/32"]').click();
        cy.get('#userInfoMenu').should('exist');
        cy.get('a[href="/staff/32/goals/"]').click();
    });

    it('Filter all goals', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 28);
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 28);
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 28);
    });

    it('Filter all goals with low level', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('.panel-title.list-group-item input[id^="level"]:not(#level_Low)')
            .uncheck({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('.level_Low button:contains("Observe")').should('have.length', 7);
    });

    it('Filter specific goal, group and level', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').eq(0).check({ force: true });
        cy.get('input[type="checkbox"][id*="goal"]').eq(1).check({ force: true });
        cy.get('input[group="GroupE"]').check({ force: true });
        cy.get('.panel-title.list-group-item input[id^="level"]:not(#level_Medium)')
            .uncheck({ force: true });

        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 3);
    });

    it('Filter all goals not observed', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 28);
    });

    it('Filter without select any goal', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
        cy.get('button:contains("Apply filters")').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please selet a goal')
            cy.on('window:confirm', () => true)
        })
    });

    it('Filter all goals expected by now only', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').uncheck({ force: true });
        cy.get('input[name="deadline_filter"]').check({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('.expected_ByNow_True button:contains("Observe")').should('have.length', 28);
    });

    it('Filter all goals not observed and expected by now only', () => {
        cy.contains('h5.panel-title', 'Goal Filter').should('exist');
        cy.get('input[type="checkbox"][id*="goal"]').check({ force: true });
        cy.get('input[name="all_groups"]').check({ force: true });
        cy.get('input[type="checkbox"][id="not_observed"]').check({ force: true });
        cy.get('input[name="deadline_filter"]').check({ force: true });
        cy.get('button:contains("Apply filters")').click();
        cy.get('#observer_table_div button:contains("Observe")').should('have.length', 28);
    });
});