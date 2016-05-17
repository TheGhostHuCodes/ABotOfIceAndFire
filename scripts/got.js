// Description:
//
// A bot that listens for key words and phrases relating to Game Of Thrones
// and obnoxiously quotes the show/books.

'use strict';

module.exports = (robot) => {
    robot.hear(/What is dead may never die/i,
               (msg) => { msg.send("What is dead may never die!"); });
    robot.hear(/underwater/i, (msg) => {
        msg.send(
          "What is dead may never die, but rises again, harder and stronger!");
    });
    robot.hear(/idk/i, (msg) => { msg.send("You know nothing, Jon Snow."); });
    robot.hear(/I know/i,
               (msg) => { msg.send("You know nothing, Jon Snow."); });
    robot.hear(/I don't know/i,
               (msg) => { msg.send("You know nothing, Jon Snow."); });
    robot.hear(/shame/i, (msg) => {
        msg.send("\uD83D\uDD14 Shame, \uD83D\uDD14 shame, \uD83D\uDD14 shame.");
    });
    robot.hear(/who/i, (msg) => { msg.send("A girl is no one.") });
    robot.hear(/debt/i,
               (msg) => { msg.send("A Lannister always pays his debts.") });
    robot.hear(/misha/i, (msg) => { msg.send("Mother of DRAGONS!") });
    robot.hear(
      /King/i,
      (msg) => { msg.send(
        "All hail His Grace, Joffrey of Houses Baratheon and Lannister, First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm.") });
    robot.hear(/King/i, (msg) => { msg.send("King in the NORTH!") });
    robot.hear(/Valar Morghulis/i, (msg) => { msg.send("Valar Dohaeris.") });
    robot.hear(/death/i, (msg) => { msg.send(
                           "What do we say to the God of death? Not today.") });
    robot.hear(/weather/i, (msg) => { msg.send("Winter is coming.") });
    robot.hear(/wrong/i, (msg) => { msg.send("Confess, confess") });
    robot.hear(/torrent/i, (msg) => { msg.send("You paid the iron price?") });
    robot.hear(/steal/i, (msg) => { msg.send("You paid the iron price?") });
    robot.hear(/stole/i, (msg) => { msg.send("You paid the iron price?") });
    robot.hear(/sentence/i,
               (msg) => { msg.send(
                 "The man who passes the sentence should swing the sword.") });
    robot.hear(/dark/i, (msg) => { msg.send(
                          "For the night is dark and full of terrors.") });
}
