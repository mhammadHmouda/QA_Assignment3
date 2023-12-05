describe('Staff Page', () => {
    beforeEach(()=>{
      cy.visit('https://goal-dev.mdx.ac.uk/staff/32/staffs/');
      cy.get('input[name="username"]').type('MayaE');
      cy.get('input[name="password"]').type('ahmad123');
      cy.get('select[name="login_as"]').select('staff');
      cy.get('form').submit();
      cy.visit('https://goal-dev.mdx.ac.uk/staff/32/staffs/')
    })
     it('Test if stuff page contain (username,first name,last name,Email,Goal,Observe,Staff,Student,Academic,Notification) && have choice as ', () => {
            cy.get('#staffs').should('exist'); 
            cy.get('#staffs thead th').eq(0).contains('Username');
            cy.get('#staffs thead th').eq(1).contains('First Name');
            cy.get('#staffs thead th').eq(2).contains('Last Name');
            cy.get('#staffs thead th').eq(3).contains('Email');
            cy.get('#staffs thead th').eq(4).contains('Goal');
            cy.get('#staffs thead th').eq(5).contains('Observe');
            cy.get('#staffs thead th').eq(6).contains('Staff');
            cy.get('#staffs thead th').eq(7).contains('Student');
            cy.get('#staffs thead th').eq(8).contains('Academic');
            cy.get('#staffs thead th').eq(9).contains('Notification');
            cy.get('button.btn-primary').should('exist').should('contain.text', 'Add staff') ;   
            ///////////////////////////////////////////////////////////////////////////////
            cy.get('select[name="permissions_Goals"]').should('exist');
            cy.get('select[name="permissions_Goals"] option').then(($options) => {
            console.log($options);
             });
            cy.get('select[name="permissions_Observe"]').should('exist');
            cy.get('select[name="permissions_Observe"] option').then(($options) => {
                console.log($options);
            }); 
            cy.get('select[name="permissions_Staff"]').should('exist');
            cy.get('select[name="permissions_Staff"] option').then(($options) => {
                console.log($options);
            }); 
            cy.get('select[name="permissions_Student"]').should('exist');
            cy.get('select[name="permissions_Student"] option').then(($options) => {
                console.log($options);
            }); 
    
            cy.get('select[name="permissions_Academic"]').should('exist');
            cy.get('select[name="permissions_Academic"] option').then(($options) => {
                console.log($options);
            }); 
    
            cy.get('select[name="permissions_Notification"]').should('exist');
            cy.get('select[name="permissions_Notification"] option').then(($options) => {
                console.log($options);
            }); 
            
    
          });
     it('Add invalid staff ', () => {
          cy.get('button.btn-primary').should('exist').should('contain.text', 'Add staff') ;      
          const newStaffUsername = 'maisEe';
          cy.get('#new_staff').type(newStaffUsername);
          cy.contains('Add staff').click();
          cy.get('td.sorting_1').contains(newStaffUsername).should('be.visible');
        });
    
        it('Add valid staff ', () => {
            cy.get('button.btn-primary').should('exist').should('contain.text', 'Add staff') ;      
            const newStaffUsername = 'thaerW';
            cy.get('#new_staff').type(newStaffUsername);
            cy.contains('Add staff').click();
            cy.get('td.sorting_1').contains(newStaffUsername).should('be.visible');
        });
    
    it('Remove an existing staff ', () => {
        cy.get('#staff_maya1234	', { timeout: 8000 }).should('be.visible').within(() => {
            cy.get('td').eq(9).invoke('show');
            cy.contains('Remove').click({ force: true }); 
          });
          cy.wait(2000);
          cy.get('div.modal-content').contains('Remove').click({ force: true });
          
      });
    
    it("Sort STAFF Results On (Email) Clicked (ascending)", () => {
        cy.contains('th.sorting[aria-label="Email: activate to sort column ascending"]', 'Email').click();
        cy.wait(1000);
        cy.get('tr td:nth-child(4)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort();
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (Username) Clicked (ascending)", () => {
        cy.wait(1000);
        cy.get('tr td:first-child').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort((a, b) => {
            return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
          });
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (Username) Clicked (descending)", () => {
        cy.get('.dataTables_scrollHeadInner > .table > .thead-dark > tr > .sorting_asc').click();
        cy.get('tr td:first-child').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
          expect(values).to.deep.equal(sortedValues);
        });
      });
    
      it("Sort STAFF Results On (Email) Clicked (descending)", () => {
        cy.contains('th.sorting[aria-label="Email: activate to sort column ascending"]', 'Email').click();
        cy.wait(1000);
        cy.contains('th[aria-label="Email: activate to sort column descending"]', 'Email').click();
        cy.get('tr td:nth-child(4)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (First Name) Clicked (ascending)", () => {
        cy.contains('th.sorting[aria-label="First Name: activate to sort column ascending"]', 'First Name').click();
        cy.wait(1000);
        cy.get('tr td:nth-child(2)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort();
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (First Name) Clicked (descending)", () => {
        cy.contains('th.sorting[aria-label="First Name: activate to sort column ascending"]', 'First Name').click();
        cy.wait(1000);
        cy.contains('th[aria-label="First Name: activate to sort column descending"]', 'First Name').click();
        cy.get('tr td:nth-child(2)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (Goal) Clicked (ascending)", () => {
        cy.contains('th.sorting[aria-label="Goal: activate to sort column ascending"]', 'Goal').click();
        cy.wait(1000);
        cy.get('tr td:nth-child(5)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort();
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      it("Sort STAFF Results On (Goal) Clicked (descending)", () => {
        cy.contains('th.sorting[aria-label="Goal: activate to sort column ascending"]', 'Goal').click();
        cy.contains('th[aria-label="Goal: activate to sort column descending"]', 'Goal').click();
        cy.wait(1000);
        cy.get('tr td:nth-child(5)').then($columns => {
          const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
          const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
          expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
        });
      });
      
      })