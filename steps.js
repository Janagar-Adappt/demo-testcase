const { expect } = require('chai');

describe('Trader Live Blotter Tests', () => {
    it('should reset filter and verify mock RFQ in blotter', () => {
        // Step 1: Launch the trader live blotter
        launchTraderLiveBlotter();

        // Step 2: Reset and apply new filter in trader blotter settings
        resetAndApplyFilter();

        // Step 3: Trigger the mock RFQ
        triggerMockRFQ();

        // Step 4: Verify the mock RFQ in Trader blotter
        expect(isMockRFQVisibleInBlotter()).to.be.true;
    });

    it('should reset filter and verify mock RFQ in ticket', () => {
        // Step 1: Launch the trader live blotter
        launchTraderLiveBlotter();

        // Step 2: Reset and apply new filter in trader blotter settings
        resetAndApplyFilter();

        // Step 3: Trigger the mock RFQ
        triggerMockRFQ();

        // Step 4: Verify the mock RFQ in Trader Ticket
        expect(isMockRFQVisibleInTicket()).to.be.true;
    });

    it('should verify updated mock RFQ status', () => {
        // Step 1: Launch the trader live blotter
        launchTraderLiveBlotter();

        // Step 2: Trigger the updated mock RFQ
        triggerUpdatedMockRFQ();

        // Step 3: Verify the change in status column for mock RFQ
        expect(isMockRFQStatusUpdated()).to.be.true;
    });

    it('should verify insights window and data', () => {
        // Step 1: Launch the trader live blotter
        launchTraderLiveBlotter();

        // Step 2: Select a RFQ in the blotter and launch the Trader ticket
        selectRFQAndLaunchTicket();

        // Step 3: Select the insights button in trader ticket
        clickInsightsButton();

        // Step 4: Verify the insights window and data
        expect(isInsightsWindowVisible()).to.be.true;
        expect(isInsightsDataCorrect()).to.be.true;
    });

    it('should verify buddy window and data', () => {
        // Step 1: Launch the trader live blotter
        launchTraderLiveBlotter();

        // Step 2: Select a RFQ in the blotter and launch the Trader ticket
        selectRFQAndLaunchTicket();

        // Step 3: Select the buddy window button in trader ticket
        clickBuddyWindowButton();

        // Step 4: Verify the buddy window and data
        expect(isBuddyWindowVisible()).to.be.true;
        expect(isBuddyWindowDataCorrect()).to.be.true;
    });
});

   // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
