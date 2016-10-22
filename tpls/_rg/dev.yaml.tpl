_dev:
    - !C.project
        name : "{{ProjectName}}"
        root : "${HOME}/devspace/{{ProjectName}}"
    - !C.version
        file : "version.txt"
    - !C.git
        remote : "{{GitRemote}}"
