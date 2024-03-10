"use strict";
// Question no # 17     Shrinking Guest List
let guest_list1 = ['ali', 'asim', 'atif', 'rizwan'];
let more_guest = ['shan', 'shahnwaz', 'sameer'];
let full_guest = guest_list1.concat(more_guest);
while (full_guest.length > 2) {
    let removed_guest = full_guest.pop();
    console.log(`Sorry ${removed_guest}, I cant invite you to dinner`);
}
for (let guest of full_guest) {
    console.log(`You are still invited, please attend this event ${guest}`);
}
