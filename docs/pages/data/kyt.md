# Know Your Token (KYT) - Digital Wallet Whitelisting

## Why Blockchian Projects Should Use KYT

KYT helps facilitate compliance with regulations by providing tools for tracking and analyzing cryptocurrency transactions for a given wallet. This includes features such as monitoring for transactions with blacklisted addresses, identifying unusual or high-risk activity, and generating reports for regulatory bodies. KYT helps businesses and individuals ensure that their cryptocurrency transactions, such as funds received during an ITO, are in line with relevant regulations and standards. In this way, KYT can help businesses avoid potential fines or legal issues that may arise from non-compliant activity.

## SDK Fields and Types

- `id               (integer)`: system assigned unique identifier for the digital wallet record
- `wallet_address   (text)`: wallet address submitted for analysis
- `created_at       (timestamp)`: date and time digital wallet was submitted for analysis
- `updated_at       (timestamp)`: data and time of last status update
- `deleted          (boolean)`: flag indicating if the record has been deleted
- `external_user_id (text)`: third party user id or unique identifier from the external system submitted via the SDK during the verificaiton process
- `clean_wallet     (boolean)`: flag indicating if the wallet address was newly created and has no transaction history (this flag is set upon submission of the wallet address to the SDK and is meant to be used only when the calling system generates a new wallet address for the user)
- `status_id        (integer)`: current status of the digital wallet record

## Wallet Status Id Definitions

The status_id defines the current state of the whitelisting process, the values are:

- `1 - Pending`: The wallet address has been submitted to the SDK and is currently being analyzed
- `2 - Approved`: The wallet address has been analyzed, risk score/factors reviewed and approved for use
- `3 - Denied`: The wallet address has been analyzed and the risk score is too high to be approved for use due to risk factors such as blacklisted/sanctioned addresses, contains funds from known illicit sources, etc.
- `4 - Auto-approved`: The wallet address has been analyzed and the risk score is low enough to be approved for use without further review

Other Status Related Notes:

- If wallets are flagged as a “clean_wallet”, the status_id will be auto-approved.
- All wallets start in the pending state until the wallet analysis scoring and report is completed.
- Based on the score, some wallets will be auto-approved upon completion of the scoring process.
- Denied, approved and auto-approved are **final results**
