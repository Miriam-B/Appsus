import {utilService} from '../../../services/util-service.js'
export const emailService = {

}

var gEmails = [{
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        sender: 'Miriam',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    }
]

function query() {
    return Promise.resolve(gEmails)
}

function getEmailById(emailId) {
    var email = gEmails.find((currEmail) => {
        return currEmail.id == emailId
    });
    return Promise.resolve(email)
}