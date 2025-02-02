/**
 * @ Author: ArugaZ
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-06-22 15:05:07
 * @ Description:
 */

import { fetchJson } from '../utils/fetcher.js'

async function getZoneStatus(latitude, longitude, userId = '2d8ecc70-8310-11ea-84f8-13de98afc5a4') {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            headers: {
                Authorization: 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ== ',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                latitude: latitude.toString(),
                longitude: longitude.toString(),
                userId
            })
        }
        fetchJson('https://cdn-api.co-vin.in/api/v2/admin/location/states', options)
            .then(json => {
                const result = {
                    kode: json.data.zone,
                    status: '',
                    optional: ''
                }

                switch (json.data.zone) {
                    case 'red':
                        result.status = 'You are in the Red Zone of the spread of COVID-19.'
                        result.optional = 'The red zone is an area where there are positive cases of COVID-19.'
                        break
                    case 'yellow':
                        result.status = 'You are in the Yellow Zone of the spread of COVID-19.'
                        result.optional = 'The Yellow Zone is an area where there are cases of ODP or PDP COVID-19.'
                        break
                    case 'green':
                        result.status = 'You are in the Green Zone of the spread of COVID-19.'
                        result.optional = 'The Green Zone is an area where there are no PDP or positive cases of COVID-19.'
                        break
                }

                if (!json.success && json.message == 'You are in the safe zone.') {
                    result.kode = 'green'
                    result.status = 'You are in the Green Zone of the spread of COVID-19.'
                    result.optional = 'The Green Zone is an area where there are no PDP or positive cases of COVID-19.'
                }
                resolve(result)
            })
            .catch((err) => reject(err))
    })
}

async function getArea(latitude, longitude, size = 10) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: ' Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ== ',
                'Content-Type': ' application/json '
            }
        }
        fetchJson(`https://api.pedulilindungi.id/zone/v1/location/area?latitude=${latitude}&longitude=${longitude}&page=1&size=${size}`, options)
            .then(json => {
                if (json.success && json.code == 200) resolve(json)
            })
            .catch((err) => reject(err))
    })
}

const getLocationData = async (latitude, longitude) => {
    try {
        const responses = await Promise.all([getZoneStatus(latitude, longitude), getArea(latitude, longitude)])
        const result = {
            kode: 200,
            status: responses[0].status,
            optional: responses[0].optional,
            data: []
        }
        responses[1].data.map((x) => result.data.push(x))
        return result
    } catch (err) {
        console.log(err)
        return { kode: 0 }
    }
}

export default getLocationData
