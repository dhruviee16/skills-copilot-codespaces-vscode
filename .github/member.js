function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }

    };
}