FROM python:3.11.2-alpine3.17
WORKDIR /notifService
RUN pip install setuptools psycopg2-binary
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 8080
CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py createsuperuser --noinput && python manage.py runserver 0.0.0.0:8000"]