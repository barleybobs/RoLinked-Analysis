[Back to main](./README.md)

# Analysis

## Code Analysis

From the deobfuscated code I have created this flowchart which outlines how it works.

If conditional statements are missing a `True` or `False` then that path would result in the script stopping.

```mermaid
flowchart TD
    emailCheck[[Email Check]]
    emailCheck --> accountEmailFetch[Get account email]
    accountEmailFetch --> emailSetupCheck{Account has email set up}
    emailSetupCheck --> |True|hotmailCheck{Email is @hotmail.com}
    hotmailCheck --> |True|emailStartCheck{Redacted email begins with a****}
    emailStartCheck --> logout[Logout]
    emailSetupCheck --> |False|attemptEmailChange[Attempt to change users email to random email from array]
    attemptEmailChange --> twoSecondDelay[Wait 2 seconds]
    twoSecondDelay --> accountEmailFetch

    authenticate[[Authenticate]]
    authenticate --> |False|twoFaEnabledCheck{2FA enabled}
    twoFaEnabledCheck --> |False|sendOtpCode[Send OTP code]
    sendOtpCode --> showOtpPopup[Show fake OTP popup]
    showOtpPopup --> validateCode[Validate Code]
    twoFaEnabledCheck --> |True|twoFaMethod{2FA Method}
    twoFaMethod --> |Email|sendEmailCode[Send 2FA code to email]
    sendEmailCode --> showEmailPopup[Show fake email 2FA code]
    showEmailPopup --> validateCode
    twoFaMethod --> |Authenticator|showAutheticatorPopup[Show fake authenticator popup]
    showAutheticatorPopup --> validateCode
    validateCode --> generateToken[Reauthenticate / Generate token]
    generateToken --> removeFakePopup[Remove fake popup]

    start([Bookmarklet clicked by user])
    start --> scanDms[Scan DMs for DM from 'VlK Games']
    scanDms --> loginCheck{Logged In}
    loginCheck --> |True|sendFriendRequest[Send a friend request to user id 6045232974]
    sendFriendRequest --> dmCheck{DM from 'VlK Games'}
    dmCheck --> |True|beginEmailCheck[[emailCheck]]
    dmCheck --> |False|collectableCalc[Calculate value of collectables in account inventory]
    collectableCalc --> collectableCheck{Value >15000}
    collectableCheck --> |False|unableToLink[Show popup that account is unable to be linked]
    collectableCheck --> |True|beginEmailCheck
    beginEmailCheck --> showAgreementPopup[Show agreement popup]
    showAgreementPopup --> waitUntilAgree[Wait until 'Agree' button clicked]
    waitUntilAgree --> disableAgreementPopup[Disable 'Agree' button]
    disableAgreementPopup --> pinEnabledCheck{Pin enabled}
    pinEnabledCheck --> |True|pinUnlockedCheck{Pin unlocked}
    pinEnabledCheck --> |False|twoFaEnabledCheck2{2FA enabled}
    pinUnlockedCheck --> |False|unlockPinPopup[Show popup to unlock pin]
    unlockPinPopup --> waitUntilUnlocked[Wait until 'Open settings' button clicked]
    waitUntilUnlocked --> removePinPopup[Remove popup to unlock pin]
    removePinPopup --> enableAgreementPopup[Enable 'Agree' button]
    enableAgreementPopup --> waitUntilAgree
    pinUnlockedCheck --> |True|attemptDisablePin[Attempt to disable pin]
    attemptDisablePin --> pinDisableCheck{Pin disabled successfully}
    pinDisableCheck --> |True|twoFaEnabledCheck2
    pinDisableCheck --> |False|authenticate1[[Authenticate]]
    authenticate1 --> attemptDisablePin2[Attempt to disable pin]
    attemptDisablePin2 --> pinDisableCheck2{Pin disabled successfully}
    pinDisableCheck2 --> |True|twoFaEnabledCheck2

    twoFaEnabledCheck2 --> |True|twoFaMethod2{2FA method}
    twoFaMethod2 --> |Authenticator|showEmailTwoFaRequiredPopup[Show popup stating that email 2FA needs to be enabled]
    showEmailTwoFaRequiredPopup --> waitUntilAgree2[Wait until 'Agree' button clicked]
    waitUntilAgree2 --> removeEmailTwoFaRequiredPopup[Remove popup stating that email 2FA needs to be enabled]
    removeEmailTwoFaRequiredPopup --> enableAgreementPopup2[Enable 'Agree' button]

    enableAgreementPopup2 --> authenticate2[[Authenticate]]
    authenticate2 --> attemptEmailTwoFaEnable[Attempt to enable email 2FA]
    attemptEmailTwoFaEnable --> waitUntilAgree

    twoFaEnabledCheck2 --> |False|attemptChangeBirthdate[Attenpt to change account birthdate to 2022-02-02]
    attemptChangeBirthdate --> changeBirthdateCheck{Birthdate changed successfully}
    changeBirthdateCheck --> |True|attemptEmailChange2[Attempt to change users email to random email from array]
    attemptEmailChange2 --> finish([End])

    changeBirthdateCheck --> |False|authenticate3[[Authenticate]]
    authenticate3 --> twoFaEnabledCheck2

```

## Friend Request Analysis

When the friend request is sent it is sent to the Roblox account id `6045232974`. This account can be found at https://www.roblox.com/users/6045232974/profile, which shows they are called `slimeBallBack7`. Their account appears like this:

![](./assets/roblox/friend.png)

This has been the user friended since 2024-06-08. Before that it was the Roblox account id `5762605139`, which has since been terminated.

## Email Analysis

This table contains the emails stored in the code that are used to take control of the account. They are all either @hotmail.com or @outlook.com.

| Date       | Emails                                                                                                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2024-05-20 | carolinazf8w@outlook.com                                                                                                                                                                                                                                          |
| 2024-06-08 | mendcarl3@hotmail.com                                                                                                                                                                                                                                             |
| 2024-06-20 | parente.ilda@hotmail.com                                                                                                                                                                                                                                          |
| 2024-06-27 | katiemacadam26@hotmail.com<br>kendalmonica13@hotmail.com                                                                                                                                                                                                          |
| 2024-07-03 | teresafarmer46@outlook.com                                                                                                                                                                                                                                        |
| 2024-07-07 | dowmanmelissa83@hotmail.com                                                                                                                                                                                                                                       |
| 2024-07-15 | albertinaguerrero1971@hotmail.com<br>alwine.lenora_1989@hotmail.com <br>archibaldalexandra64@hotmail.com <br>aldridgeangela13@hotmail.com<br>anitabaldwin50@hotmail.com<br>alicebirch40@hotmail.com<br>archibaldmary94@hotmail.com<br>alyssagilmore09@hotmail.com |

## Popups

The script makes heavy use of popups to present it as reputable, and for some popups, such as the fake 2FA/OTP popups to present itself as Roblox.

### Not Logged In

![](./assets/popups/notLoggedIn.png)

### Error in Getting Collectables

![](./assets/popups/refreshPage.png)

### Unable to be Linked

![](./assets/popups/unableToLink.png)

### Agreement

![](./assets/popups/agreement.png)

### Pin Locked

![](./assets/popups/pinLocked.png)

### Enable Email 2FA

![](./assets/popups/enable2fa.png)

### Fake 2FA/OTP

![](./assets/popups/2faEmail.png)
![](./assets/popups/2faAuthenticator.png)
![](./assets/popups/otpEmail.png)
