def retry(times=10):
    def outer(f):
        def inner(*args, **kwargs):
            for i in range(times):
                  try:
                       return f(*args, **kwargs)
                  except Exception as e:
                      if (i + 1) < times:
                            pass
                      else:
                            raise e

        return inner
    return outer