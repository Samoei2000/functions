function distanceFromHqInBlocks(pickupLocation) {
    // Scuber's headquarters is at 42nd Street
    const hqLocation = 42;
    
    // Calculate distance in blocks
    const distance = Math.abs(pickupLocation - hqLocation);
    
    return distance;

}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    const feetPerBlock = 264; // Length of one block in Manhattan in feet
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    return blocksTravelled * feetPerBlock;
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; // Length of one block in Manhattan in feet
    return blocks * feetPerBlock; // Total distance in feet
}

function calculatesFarePrice(start, destination) {
    
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; // Length of one block in Manhattan in feet
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const additionalFeet = distance - 400;
        return additionalFeet * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
