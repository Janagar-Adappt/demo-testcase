ML_TS_06: Verifying Desk & Status

Scenario: Verifies that the correct desk and status information is displayed in the Trader Live Blotter for a given trade.
Automation Steps:
Launch the Trader Live Blotter.
Reset and apply filters to display trades with a specific desk and status.
Trigger a mock RFQ.
Verify that the mock RFQ is displayed with the correct desk and status information.

ML_TS_07: Verifying The Country

Scenario: Verifies that the correct Country is displayed.

Launch the Trader Live Blotter.
Reset and apply filters to display trades with a specific nominal value.
Trigger a mock RFQ.
Verify that the mock RFQ is displayed with the correct nominal value.

ML_TS_08: Verifying Currency

Scenario: Verifies that the correct currency and quote trader information is displayed for a given trade.
Launch the Trader Live Blotter.
Reset and apply filters to display trades with a specific currency and quote trader.
Trigger a mock RFQ.
Verify that the mock RFQ is displayed with the correct currency and quote trader information.

ML_TS_01: Verifying isAxed is false

Scenario: Verifies that the "isAxed" flag is displayed correctly for a given trade.
Automation Steps:
Launch the Trader Live Blotter.
Reset and apply filters to display trades with a specific "isAxed" status.
Trigger a mock RFQ.
Verify that the mock RFQ is displayed with the correct "isAxed" flag.

ML_TS_02: Verifying Priority Logic
Scenario: Verifies that trades are displayed in the correct order based on their priority.
Automation Steps:
Launch the Trader Live Blotter.
Reset and apply filters to display multiple trades with different priorities.
Trigger mock RFQs with different priorities.
Verify that the trades are displayed in the correct order based on their priority.

ML_TS04: Verifying FILTER STATUS and Desk

Scenario: Verifies that the correct main book or BBG book information is displayed for a given trade.
Automation Steps:
Launch the Trader Live Blotter.
Reset and apply filters to display trades with a specific main book or BBG book.
Trigger a mock RFQ.
Verify that the mock RFQ is displayed with the correct main book or BBG book information.
