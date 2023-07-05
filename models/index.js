const models = {
    adminsModel : require ("./trashdb/admins"),
    auditModel : require ("./trashdb/audit"),
    clientsModel : require ("./trashdb/clients"),
    employeesModel : require ("./trashdb/employees"),
    gamesModel : require ("./trashdb/games"),
    passModel : require ("./trashdb/pass")
}

module.exports = models