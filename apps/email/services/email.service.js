import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'
import { eventBusService } from '../../../services/event-bus.service.js'


export const emailService = {
    query,
    getEmailById,
    deleteEmail
}

const KEY = 'emails';

var gEmails = _loadEmailFromStorage();
if (!gEmails) {
    gEmails = generateEmails()
}
_saveEmailsToStorage();

function generateEmails() {
    return [{
        id: utilService.makeId(),
        sender: 'joe@frieinds.com',
        senderName: 'Joe',
        subject: 'Wassap? how are youuuuu doin?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'shlomi@frieinds.com',
        senderName: 'Shlomi',
        subject: 'About the new employee?',
        body: 'Lorem ipsum potatoes and monkeys!',
        isRead: true,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'jossse@frieiands.com',
        senderName: 'Lisa',
        subject: 'Hello, welcome to potato land',
        body: 'Lorem ipsum potatoes and monkeys!',
        isRead: true,
        sentAt: 15511000000000
    },
    {
        id: utilService.makeId(),
        sender: 'joe@frieaainds.com',
        senderName: 'DJ Hi-tech',
        subject: 'How much is the fish?',
        body: 'Lorem ipsum potatoes and monkeys!',
        isRead: true,
        sentAt: 1551100930594
    },
    {
        id: utilService.makeId(),
        sender: 'joe@friaaeinds.com',
        senderName: 'Darth Shreider',
        subject: 'Wassap? I am your brother',
        body: 'I did the DNA test',
        isRead: true,
        sentAt: 1550133930594
    }
    ];
}

function query(filterBy) {
    let emails = gEmails.
        filter(email => (filterBy && filterBy.onlyUnread) ? !email.isRead : true).
        filter(email => (filterBy && filterBy.text ? 
                            email.body.toLowerCase().includes(filterBy.text.toLowerCase()) || 
                            email.subject.toLowerCase().includes(filterBy.text.toLowerCase()) || 
                            email.sender.toLowerCase().includes(filterBy.text.toLowerCase()) ||
                            email.senderName.toLowerCase().includes(filterBy.text.toLowerCase()) : true));

    emails.sort((firstEmail, secondEmail) => firstEmail.sentAt > secondEmail.sentAt);

    return Promise.resolve(emails);
}

function getEmailById(emailId) {
    var email = gEmails.find((currEmail) => {
        return currEmail.id == emailId
    });
    return Promise.resolve(email)
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();

    eventBusService.emit('emails-updated');
    return Promise.resolve()
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function _loadEmailFromStorage() {
    return storageService.loadFromStorage(KEY)
}

// function saveCar(car) {
//     return car.id ? _updateCar(car) : _addCar(car)
// }

function _addEmail(emailToAdd) {
    gEmails.unshift(email)
    _saveEmailsToStorage();
    return Promise.resolve(email)
}

// function _updateCar(carToUpdate) {
//     var carIdx = gCars.findIndex(function (car) {
//         return car.id === carToUpdate.id;
//     })
//     gCars.splice(carIdx, 1, carToUpdate)
//     _saveCarsToStorage();
//     return Promise.resolve(carToUpdate)
// }