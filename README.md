Teams Mac app uses Microsoft fonts and feels very foreign on MacOS. This drives me crazy so I created some CSS hacks to tweak it. 

Since it is an electron app it is possible to inject CSS. Initially I used the very clever python scripts that @dany74q setup.
https://github.com/dany74q/microsoft-teams-rtl-runner, but it causes some weirdness. I may look into this more.

After learning about the developer menu now I just find it easier to take the script in this repo, enter developer mode (tap the Teams icon 7 times) open Web Inspector on the Develop menu and paste this script in.
Since I don't restart Teams much it doesn't really bother me (yet). I attempted to actually inject it into the app itself but it seems that it undoes my changes.

Anyways hope this helps someone else annoyed, open to additional tweaks or ideas to inject the script automatically.
