describe("Staff Page", () => {
  beforeEach(() => {
    const username = "MohammadE";
    const password = "ahmad123";
    cy.visit("https://goal-dev.mdx.ac.uk/");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('select[name="login_as"]').select("staff");
    cy.get("form").submit();
    cy.get('a[href="/staff/32"]').click();
    cy.get("#userInfoMenu").should("exist");
    cy.get('a[href="/staff/32/staffs/"]').click();
  });

  it("Search by Valid Name , Should Display the rows contains the name", () => {
    const searchValue = "ahmad";

    it("should find the search form", () => {
      cy.get("form").should("exist");
      cy.get("form").should("have.attr", "action", "/search");
    });

    cy.get(
      'input[type="search"][class="form-control form-control-sm"][placeholder=""][aria-controls="staffs"]'
    )
      .type(searchValue)
      .should("have.value", searchValue);
    cy.wait(1000);

    cy.get(".dataTables_scrollHead").should("exist");
    cy.get("tr#staff_AhmadE").contains("td", searchValue).should("exist");
  });

  it("Search by Valid Email , Should Display the rows contains the email", () => {
    const searchValue = "maya.abdo@gmail.com";

    it("should find the search form", () => {
      cy.get("form").should("exist");
      cy.get("form").should("have.attr", "action", "/search");
    });

    cy.get(
      'input[type="search"][class="form-control form-control-sm"][placeholder=""][aria-controls="staffs"]'
    )
      .type(searchValue)
      .should("have.value", searchValue);
    cy.wait(1000);

    cy.get(".dataTables_scrollHead").should("exist");
    cy.get("tr#staff_MayaE").contains("td", searchValue).should("exist");
  });

  it("Search by invalid data, should display no rows when searching with invalid data", () => {
    const invalidSearchValue = "invalid data";
    it("should find the search form", () => {
      cy.get("form").should("exist");
      cy.get("form").should("have.attr", "action", "/search");
    });

    cy.get(
      'input[type="search"][class="form-control form-control-sm"][placeholder=""][aria-controls="staffs"]'
    )
      .type(invalidSearchValue)
      .should("have.value", invalidSearchValue);

    // Wait for the search results to update
    cy.wait(2000);

    // Check that no rows are displayed
    cy.get(".dataTables_empty").should("exist");
  });

  it("Try to Edit a Staff UserName , Should Editing the user name when theres existing email", () => {
    cy.get(
      "#staffs_wrapper > div.dataTables_scroll > div.dataTables_scrollBody"
    ).should("contain", "AhmadE");
    cy.get("#staff_AhmadE td:nth-child(4)")
      .invoke("text")
      .should("not.be.empty");
    cy.contains('td[tabindex="0"].sorting_1', "AhmadE").click();
    cy.contains("a", "Edit").click({ force: true });
    cy.get('input[name="first_name"]:eq(0)').clear().type("New Value{enter}");

    cy.get('input[name="first_name"]:eq(0)').should("have.value", "New Value");
  });

  it("Try to Edit a Staff UserName , Should Editing the user name when theres no existing email", () => {
    cy.get(
      "#staffs_wrapper > div.dataTables_scroll > div.dataTables_scrollBody"
    ).should("contain", "Thaer");
    cy.get("#staff_Thaer td:nth-child(4)").invoke("text").should("be.empty");
    cy.contains("td", "Thaer").parent("tr").click();
    cy.contains('td[tabindex="0"].sorting_1', "Thaer").click();
    cy.contains("a[onclick=\"showEditRow('Thaer')\"]", "Edit").click({
      force: true,
    });
    cy.contains("a", "Edit").click({ force: true });
  });

  it("Filter without select any goal in observe page", () => {
    cy.get('a[href="/staff/32/goals/"]').click();

    cy.contains("h5.panel-title", "Goal Filter").should("exist");
    cy.get('input[name="all_groups"]').check({ force: true });
    cy.get("input#all_goals").check({ force: true });

    cy.get('button:contains("Apply filters")').click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please selet a group");
      cy.on("window:confirm", () => true);
    });
  });

  it("Observer ascending sort on click", () => {
    cy.get("form").should("exist");

    cy.contains(
      'th[aria-label="Observe: activate to sort column ascending"]',
      "Observe"
    ).click();

    cy.wait(2000);
    cy.get("tr td:nth-child(6)").then(($columns) => {
      const values = $columns
        .map((index, element) => Cypress.$(element).text().trim())
        .get();
      const sortedValues = [...values].sort();
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });
  it("Observer descending sort on click", () => {
    cy.get("form").should("exist");
    let originalText;

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(5)
      .invoke("text")
      .then((text) => {
        originalText = text.trim();
      });
    cy.contains(
      'th[aria-label="Observe: activate to sort column ascending"]',
      "Observe"
    )
      .click()
      .click();

    cy.wait(1000);

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(5)
      .invoke("text")
      .then((sortedText) => {
        const isSorted = sortedText.trim() !== originalText;
        expect(isSorted).to.be.false;
      });
  });

  it("Staff ascending sort on click", () => {
    cy.get("form").should("exist");

    let originalText;

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(6)
      .invoke("text")
      .then((text) => {
        originalText = text.trim();
      });

    cy.contains(
      'th.sorting[aria-label="Staff: activate to sort column ascending"]',
      "Staff"
    ).click();

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(6)
      .invoke("text")
      .then((sortedText) => {
        const isSorted = sortedText.trim() !== originalText;
        expect(isSorted).to.be.false;
      });
  });

  it("Staff descending sort on click", () => {
    cy.get("form").should("exist");

    let originalText;

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(6)
      .invoke("text")
      .then((text) => {
        originalText = text.trim();
      });

    cy.contains(
      'th.sorting[aria-label="Staff: activate to sort column ascending"]',
      "Staff"
    )
      .click()
      .click();

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(6)
      .invoke("text")
      .then((sortedText) => {
        const isSorted = sortedText.trim() !== originalText;
        expect(isSorted).to.be.false;
      });
  });

  it("Student ascending sort", () => {
    cy.get("form").should("exist");

    let originalText;

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(7)
      .invoke("text")
      .then((text) => {
        originalText = text.trim();
      });

    cy.contains(
      'th.sorting[aria-label="Student: activate to sort column ascending"]',
      "Student"
    ).click();

    cy.wait(1000);

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(7)
      .invoke("text")
      .then((sortedText) => {
        const isSorted = sortedText.trim() !== originalText;
        expect(isSorted).to.be.false;
      });
  });

  it("Student descending sort on click", () => {
    cy.get("form").should("exist");

    let originalText;

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(7)
      .invoke("text")
      .then((text) => {
        originalText = text.trim();
      });

    cy.contains(
      'th.sorting[aria-label="Student: activate to sort column ascending"]',
      "Student"
    )
      .click()
      .click();

    cy.wait(1000);

    cy.get("#staff_AhmadE")
      .find("td")
      .eq(7)
      .invoke("text")
      .then((sortedText) => {
        const isSorted = sortedText.trim() !== originalText;
        expect(isSorted).to.be.false;
      });
  });
});
