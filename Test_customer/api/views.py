from django.shortcuts import render
from django.contrib.auth.models import User,Group
from rest_framework import viewsets
from api.serializers import UserSerializer,GroupSerializer


class UserViewSet(viewsets.ModelViewSet):

    """
        retrieve:
            Return a user instance.

        list:
            Return all users,order by most recentjoined.

        create:
            Create a new user.

        delete:
            Remove a existing user.

        partial_update:
            Update one a more fields on a existing user.

        update:
            Update a user.

    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
            retrieve:
                Return a group instance.

            list:
                Return all groups,order by most recentjoined.

            create:
                Create a new group.

            delete:
                Remove a existing group.

            partial_update:
                Update one a more fields on a existing group.

            update:
                Update a group.

        """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer