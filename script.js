function displayMessage(buttonNumber) {
    var message;
    switch (buttonNumber) {
        case 1:
            message = "Just after midnight on September 27, 1869, Ellis County Sheriff Wild Bill Hickok and his deputy respond to a report that a local ruffian named Samuel Strawhun and several drunken buddies were tearing up John Bitters Beer Saloon in Hays City, Kansas. When Hickok arrived and ordered the men to stop, Strawhun turned to attack him, and Hickok shot him in the head. Strawhun died instantly, as did the riot. Such were Wild Bill's less-than-restrained law enforcement methods. Famous for his skill with a pistol and steely-calm under fire, James Butler Hickok initially seemed to be the ideal man for the sheriff of Ellis County, Kansas. The good citizens of Hays City, the county seat, were tired of the wild brawls and destructiveness of the hard-drinking buffalo hunters and soldiers who took over their town every night. They hoped the famous “Wild Bill” could restore peace and order, and in the late summer of 1869, elected him as interim county sheriff. Tall, athletic and sporting shoulder-length hair and a sweeping mustache, Hickok cut an impressive figure, and his reputation as a deadly shot with either hand was often all it took to keep many potential lawbreakers on the straight and narrow. As one visiting cowboy later recalled, Hickok would stand “with his back to the wall, looking at everything and everybody under his eyebrows—just like a mad old bull.” But when Hickok applied more aggressive methods of enforcing the peace, some Hays City citizens wondered if their new cure wasn't worse than the disease. Shortly after becoming sheriff, Hickok shot a belligerent soldier who resisted arrest, and the man died the next day. A few weeks later Hickok killed Strawhun. While his brutal ways were indisputably effective, many Hays City citizens were less than impressed that after only five weeks in office he had already found it necessary to kill two men in the name of preserving peace. During the regular November election later that year, the people expressed their displeasure, and Hickok lost to his deputy, 144-89. Though Wild Bill Hickok would later go on to hold other law enforcement positions in the West, his first attempt at being a sheriff had lasted only three months.";
            break;
        case 2:
            message = "Your custom message for button 2";
            break;
        case 3:
            message = "Your custom message for button 3";
            break;
        case 4:
            message = "Your custom message for button 4";
            break;
        case 5:
            message = "Your custom message for button 5";
            break;
        default:
            message = "Unknown button clicked.";
    }
    document.getElementById('messageDisplay').innerText = message;
}