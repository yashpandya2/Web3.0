pragma solidity ^0.5.0;

contract TodoList {
    // it will take initial value as 0
    uint256 public taskCount;

    struct Task {
        uint256 id;
        string text;    
        bool completed;
    }

    mapping(uint256 => Task) public tasks;

    constructor() public {
        createTask("Created first ever web3.0 Application");
    }

    function createTask(string memory _text) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _text, false);
    }
}
